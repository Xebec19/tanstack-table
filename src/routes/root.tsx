import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="py-4 flex justify-center">
        <Link className="link" to={"/table/expandable"}>
          Expandable Table
        </Link>

        <Link className="link" to={"/table/group"}>
          Group Table
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
