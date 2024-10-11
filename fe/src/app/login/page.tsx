import FormSection from "@/components/form/form-section";
import LoginForm from "@/app/login/login-form";

export default function LoginPage() {
  return (
    <div className="p-12 h-screen flex flex-col items-center justify-center space-y-12 bg-white text-black">
      <FormSection header="Login">
        <LoginForm />
      </FormSection>
    </div>
  );
}
