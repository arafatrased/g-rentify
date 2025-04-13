// Server Component — NO hooks here
import ResetPasswordForm from './ResetPasswordForm';

export default function ResetPasswordPage({ searchParams }) {
  const token = searchParams?.token;
  console.log(token);

  return <ResetPasswordForm token={token} />;
}