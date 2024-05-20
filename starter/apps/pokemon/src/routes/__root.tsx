import React from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="max-w-7xl mx-auto">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold text-3xl">
          Pokemon!
        </Link>
      </div>
      <hr className="mb-6" />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
