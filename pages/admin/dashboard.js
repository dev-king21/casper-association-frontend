import LayoutDashboard from '../../components/layouts/layout-dashboard';
import { Card } from '../../components/partials';
import InfoRightAdminHome from '../../components/admin/info-right-admin-home';
import ContentAdminHome from '../../components/admin/content-admin-home';
import { LoadingScreen } from '../../components/hoc/loading-screen';

const AdminDashboard = () => (
  <LayoutDashboard>
    <div className="flex h:auto lg:h-full">
      <ContentAdminHome />
      <Card className="hidden lg:block h-full">
        <div className="overflow-y-scroll h-full w-80">
          <InfoRightAdminHome />
        </div>
      </Card>
    </div>
  </LayoutDashboard>
);

export default LoadingScreen(AdminDashboard, 'final-admin');
