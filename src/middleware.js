import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';




export const middleware = async (req, res) => {

    const token = await getToken({ req });
    // const isAuthenticated = !!token;
    const isTokenOk = !!token;
    const isAdmin = token?.role === 'admin';
    const isLender = token?.role === 'lender';
    const isBorrower = token?.role === 'borrower';

    const isAuthenticated = isTokenOk && (isAdmin || isLender);
    const isNormalUser = isTokenOk && (isBorrower);
    // const isLoginPath = req.nextUrl.pathname.startsWith('/login');
    // const isRegisterPath = req.nextUrl.pathname.startsWith('/register');
    const isDashBoardPath = req.nextUrl.pathname.startsWith('/dashboard');
    const isMyAccountPath = req.nextUrl.pathname.startsWith('/my-account');
    const isPaymentPath = req.nextUrl.pathname.startsWith('/payment');
    if(!isAuthenticated && isDashBoardPath) {
        // signOut({ callbackUrl: '/my-account' });
        return NextResponse.redirect(new URL('/my-account', req.url));
    }

    if(isNormalUser && isDashBoardPath) {
        return NextResponse.redirect(new URL('/my-account', req.url));
    };
 

    if(!isNormalUser && isMyAccountPath) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    if(!isNormalUser && isPaymentPath) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    const isAdminSpecificPath = req.nextUrl.pathname.startsWith('/dashboard/add-gadget');
    if(isAdminSpecificPath && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
  // Check if the request is for the homepage
//   if (req.url === '/') {
//     // Redirect to the gadgets page
//     return res.redirect('/gadgets');
//   }

  // Continue with the request
  return NextResponse.next();
};
