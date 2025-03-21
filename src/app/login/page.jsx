
import LoginForm from "./components/LoginForm";


const LoginPage = () => {
    return (
        <div className="flex items-center flex-col justify-center h-screen">
            <h1 className="text-3xl font-bold">Log In</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;