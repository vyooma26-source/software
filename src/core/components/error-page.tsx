import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.statusText || error.data?.message || "Unknown Error";
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center font-sans">
            <h1 className="text-4xl font-bold mb-4">Ooops!</h1>
            <p className="text-xl text-gray-400 mb-8">Sorry, an unexpected error has occurred.</p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8">
                <p className="text-red-400 font-mono">
                    {errorMessage}
                </p>
            </div>
            <Link
                to="/"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
                Return to Home
            </Link>
        </div>
    );
}
