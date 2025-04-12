import DefaultLayout from "@/layouts/default";

import withAuth from "@/utils/with-auth";

const AdminPage = () => {
	return <DefaultLayout isAdminNavbar>This is the admin page.</DefaultLayout>;
};

export default withAuth(AdminPage);
