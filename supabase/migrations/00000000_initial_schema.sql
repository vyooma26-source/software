-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ROLES ENUM
create type user_role as enum ('admin', 'pilot', 'client');
create type inspection_status as enum ('scheduled', 'in_progress', 'processing', 'completed', 'failed');

-- PROFILES
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text not null,
  role user_role not null default 'client',
  full_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ORGANIZATIONS
create table public.organizations (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  created_at timestamptz default now()
);

-- ORG MEMBERS
create table public.org_members (
  user_id uuid references public.profiles(id) on delete cascade not null,
  org_id uuid references public.organizations(id) on delete cascade not null,
  role text default 'member',
  primary key (user_id, org_id)
);

-- ASSETS (Solar Plants)
create table public.assets (
  id uuid default uuid_generate_v4() primary key,
  org_id uuid references public.organizations(id) not null,
  name text not null,
  location_lat float,
  location_lng float,
  capacity_mw float,
  created_at timestamptz default now()
);

-- INSPECTIONS
create table public.inspections (
  id uuid default uuid_generate_v4() primary key,
  asset_id uuid references public.assets(id) not null,
  pilot_id uuid references public.profiles(id), -- Assigned pilot
  status inspection_status default 'scheduled',
  scheduled_date timestamptz,
  completed_date timestamptz,
  created_at timestamptz default now()
);

-- INSPECTION DATA (Raw Images/Telemetry)
create table public.inspection_data (
  id uuid default uuid_generate_v4() primary key,
  inspection_id uuid references public.inspections(id) not null,
  storage_path text not null,
  file_type text,
  metadata jsonb,
  created_at timestamptz default now()
);

-- DEFECTS
create table public.defects (
  id uuid default uuid_generate_v4() primary key,
  inspection_id uuid references public.inspections(id) not null,
  asset_id uuid references public.assets(id) not null,
  location_lat float,
  location_lng float,
  severity text, -- 'critical', 'major', 'minor'
  description text,
  image_path text,
  created_at timestamptz default now()
);

-- RLS (ENABLE)
alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.org_members enable row level security;
alter table public.assets enable row level security;
alter table public.inspections enable row level security;
alter table public.inspection_data enable row level security;
alter table public.defects enable row level security;

-- RLS POLICIES (Basic placeholders to be refined)
-- Profiles: Users can read own.
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);

-- Inspections: Pilots can read assigned.
create policy "Pilots can read assigned inspections" on public.inspections for select using (auth.uid() = pilot_id);
