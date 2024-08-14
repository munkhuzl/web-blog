"use client";
const NotFound = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-9xl font-bold">404</div>
        <div className="border-l-2">
          <h1 className="mb-2">Page Not Found</h1>
          <p className="text-start">
            We're sorry. This page is unkhnown or does not exist page you are
            looking for
          </p>
          <button className="btn btn-primary ">Back To Home</button>
        </div>
      </div>
    </div>
  );
}
export default NotFound;