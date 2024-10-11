import FormSection from "@/components/form/form-section";
import SignupForm from "./signup-form";

export default function LoginPage() {
  return (
    <div className="p-12 flex flex-col items-center justify-center space-y-12">
      <div className="text-6xl">Project Name 👀</div>
      <FormSection header="Signup">
        <SignupForm />
      </FormSection>
    </div>
  );
}
