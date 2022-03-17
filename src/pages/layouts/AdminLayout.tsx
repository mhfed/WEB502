import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div className="row">
        <div className="col-2">
            Aside
        </div>
        <div className="col-10">
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AdminLayout