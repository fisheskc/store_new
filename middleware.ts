import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from 'next/server';

// This is the case where we define our public route
const isPublicRoute = createRouteMatcher(['/','/products(.*)','/about'])
// This is going to be the admin route 
// Since we a have a nested structure, we want to use admin & then all of the pages,
// & inorder  to restrict access to all of the pages, so admin/sales, products, essentially all of them
// const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async(auth, req) => {
    // In order to check that, we will use auth userID, 
    // if this true, it means user is admin user
    // If not, means user is regular user & user is not an admin user
    // const { userId } = await auth();
    // const isAdminUser = userId === process.env.ADMIN_USER_ID

    // If the user is trying to access the admin route. In that case, we redirect the user back
    if(isPublicRoute(req))  auth.protect()
    
        // We want to return a Next response & we need to make sure it is coming from the server
        // We wamt to use new URL
        // If everything is correct & we are not an admin user, we will not have access to the admin pages
    //     return NextResponse.redirect(new URL('/', req.url)) 
  
    // These are going to be public routes
    // We will actually look for the routes that are not in our createRouteMatcher
    //  if (!isPublicRoute(req)) {
    //     auth.protect()// Protect the route if it matches the defined criteria
    // }
    
});

export const config = {
    // Skip Next.js internals and all static files, unless found in search params
    // Always run for API routes
    //  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
     matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ]
};