import { changePassword as changePasswordHandler } from "../../api/api";
import { toast } from "react-hot-toast";

export const useChangePassword = () => {
  const changePassword = async (password, newPassword) => {
    const responseData = await changePassword({
      password,
      newPassword,
    });

    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occurred when fetching channel details from server."
      );
    }

    toast.success("Password changed successfully.");
  };

  return {
    changePassword,
  };
};
