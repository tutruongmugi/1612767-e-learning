import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (theme === themes.light) setTheme(themes.dark);
    else setTheme(themes.light);
  };
  const [language, setLanguage] = useState(languages.vi);
  const toggleLanguage = () => {
    if (language === languages.en) {
      setLanguage(languages.vi);
    } else {
      setLanguage(languages.en);
    }
  };
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme, language, toggleLanguage }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export const themes = {
  light: {
    text: "#050505",
    backgroundSection: "#FFF",
    darkText: "#65676B",
    background: "#F0F2F5",
  },
  dark: {
    text: "#E4E6EB",
    backgroundSection: "#242526",
    darkText: "#B0B3B8",
    background: "#18191A",
  },
};
export const languages = {
  en: {
    CHANGE_PASSWORD: "Change password",
    CHANGE_THEME: "Change theme",
    CHANGE_LANGUAGE: "Change language",
    SIGN_OUT: "Sign out",
    SETTING: "Setting",
    PROFILE: "Profile",
    EDIT: "Edit",
    SKILLS: "Skills",
    CHANGE_YOUR_PASSWORD: "Change your password",
    CURRENT_PASSWORD: "Current password...",
    NEW_PASSWORD: "New password...",
    CONFIRM_NEW_PASSWORD: "Confirm new password...",
    SUBMIT: "Submit",
    EDIT_PROFILE: "Edit Profile",
    EDIT_YOUR_PROFILE: "Edit your profile",
    SIGN_IN: "Sign In",
    EMAIL: "Email...",
    PASSWORD: "Password...",
    FORGOT_PASSWORD: "Forgot password?",
    SIGN_UP: "Sign Up",
    CREATE_ACCOUNT: "Create Account",
    NAME: "Name...",
    PHONE: "Phone...",
    CANCEL: "Cancel",
    RESET_YOUR_PASSWORD: "Reset Your Password",
    RESET_PASSWORD_NOTIFY: "We will send you an email to reset your password.",
    HOME: "Home",
    DOWNLOADS: "Downloads",
    BROWSE: "Browse",
    TOP_NEW_COURSES: "Top New Courses",
    RECOMMEND_FOR_YOU: "Recommend For You",
    TOP_SELL_COURSES: "Top Sell Courses",
    TOP_RATE_COURSES: "Top Rate Courses",
    SEE_ALL: "See all",
    NEW_RELEASES: "NEW RELEASES",
    PATHS: "Paths",
    TOP_AUTHORS: "Top Authors",
    AUTHOR: "Author",
    COURSES: "Courses",
    CREATED_AT: "Created at",
    UPDATED_AT: "Updated at",
    REQUIREMENT: "Requirement",
    WHAT_YOU_WILL_LEARN: "What you will learn",
    ADD_TO_FAVOURITES: "Add to favourites",
    ADD_TO_CHANNEL: "Add to channel",
    DOWNLOAD: "Download",
    RELATED_COURSES: "Related Courses",
    SEARCH: "Search",
    RESULTS: "Results",
    AUTHORS: "Authors",
    BOOKMARK: "Bookmark",
    DOWNLOAD_MODULE: "Download module",
    ADD_FAVOURITE: "Add Favourite",
    FAVOURITE: "FAVOURITE",
    REMOVE_FAVOURITE: "Remove Favourite",
    BOUGHT: "Bought",
    PROCESS_COURSES: "Process Courses",
    OVERVIEW: "OVERVIEW",
    CONTENTS: "CONTENTS",
    RATING: "RATING",
    ALL: "ALL",
    COURSE: "Courses",
  },
  vi: {
    CHANGE_PASSWORD: "Đổi mật khẩu",
    CHANGE_THEME: "Đổi theme",
    CHANGE_LANGUAGE: "Đổi ngôn ngữ",
    SIGN_OUT: "Đăng xuất",
    SETTING: "Cài đặt",
    PROFILE: "Thông tin cá nhân",
    EDIT: "Chỉnh sửa",
    SKILLS: "Kỹ năng",
    CHANGE_YOUR_PASSWORD: "Đổi mật khẩu hiện tại",
    CURRENT_PASSWORD: "Mật khẩu hiện tại...",
    NEW_PASSWORD: "Mật khẩu mới...",
    CONFIRM_NEW_PASSWORD: "Xác nhận mật khẩu mới...",
    SUBMIT: "Gửi",
    EDIT_PROFILE: "Chỉnh sửa thông tin cá nhân",
    EDIT_YOUR_PROFILE: "Thay đổi thông tin",
    SIGN_IN: "Đăng Nhập",
    EMAIL: "Email...",
    PASSWORD: "Mật khẩu...",
    FORGOT_PASSWORD: "Quên mật khẩu?",
    SIGN_UP: "Đăng Ký",
    CREATE_ACCOUNT: "Tạo tài khoản",
    NAME: "Tên...",
    PHONE: "Số điện thoại...",
    CANCEL: "Hủy",
    RESET_YOUR_PASSWORD: "Cài Lại mật khẩu",
    RESET_PASSWORD_NOTIFY:
      "Một email để reset password sẽ được gửi đến email của bạn",
    HOME: "Trang chủ",
    DOWNLOADS: "Tải xuống",
    BROWSE: "Duyệt qua",
    TOP_NEW_COURSES: "Các khóa học mới nhất",
    RECOMMEND_FOR_YOU: "Đề xuất cho bạn",
    TOP_SELL_COURSES: "Các khóa học bán chạy nhất",
    TOP_RATE_COURSES: "Các khóa học được xếp hạng cao nhất",
    SEE_ALL: "Tất cả",
    NEW_RELEASES: "Phiên bản mới",
    PATHS: "Đường dẫn",
    TOP_AUTHORS: "Tác giả hàng đầu",
    AUTHOR: "Tác giả",
    COURSES: "Các khóa học",
    CREATED_AT: "Được tạo lúc",
    UPDATED_AT: "Cập nhật lúc",
    REQUIREMENT: "Yêu cầu",
    WHAT_YOU_WILL_LEARN: "Bạn sẽ học ",
    ADD_TO_FAVOURITES: "Thêm vào yêu thích",
    ADD_TO_CHANNEL: "Thêm vào kênh",
    // DOWNLOAD:"Tải xuống",
    RELATED_COURSES: "Các khóa học liên quan",
    SEARCH: "Tìm Kiếm",
    RESULTS: "Kết quả",
    AUTHORS: "Tác giả",
    BOOKMARK: "Dấu trang",
    DOWNLOAD_MODULE: "Tải xuống bài học",
    FAVOURITE: "Yêu thích",
    REMOVE_FAVOURITE: "Xóa yêu thích",
    BOUGHT: "Đã mua",
    PROCESS_COURSES: "Khóa học của tôi",
    OVERVIEW: "Giới thiệu",
    CONTENTS: "Nội dung",
    RATING: "Đánh giá",
    ALL: "Tất cả",
    COURSE: "Khóa học",
  },
};

export { ThemeContext, ThemeProvider };

//error
