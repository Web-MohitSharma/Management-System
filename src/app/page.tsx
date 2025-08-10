import AdminPage from "./(dashboard)/admin/page"
import DashboardLayout from "./(dashboard)/layout"

const Homepage = () => {
  return (
    <div>
      <DashboardLayout>
        <AdminPage />
      </DashboardLayout>
    </div>
  )
}

export default Homepage