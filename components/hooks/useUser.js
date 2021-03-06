import { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';

// auth, verifying, onboarding, final, public
export default function useUser({ urlType = 'public' } = {}) {
  const user = useSelector(state => state.authReducer.userInfo);

  useEffect(() => {
    if (urlType === 'public' || !urlType || !user) {
      return;
    }
    if (user && user?.isLoggedIn) {
      if (user.role === 'member') {
        if (urlType === 'auth') {
          if (user.period === 'verifying') Router.push('/verify-email');
          if (user.period === 'onboarding') Router.push('/onboard');
          if (user.period === 'final') Router.push('/dashboard');
          return;
        }
        if (urlType === 'verifying') {
          if (user.period === 'onboarding') Router.push('/onboard');
          if (user.period === 'final') Router.push('/dashboard');
          return;
        }
        if (urlType === 'onboarding') {
          if (user.period === 'verifying') Router.push('/verify-email');
          if (user.period === 'final') Router.push('/dashboard');
          return;
        }
        if (urlType === 'final-member' || urlType === 'final-all') {
          if (user.period === 'verifying') Router.push('/verify-email');
          if (user.period === 'onboarding') Router.push('/onboard');
          return;
        }
        if (urlType === 'final-admin') {
          if (user.period === 'verifying') Router.push('/verify-email');
          if (user.period === 'onboarding') Router.push('/onboard');
          if (user.period === 'final') Router.push('/dashboard');
        }
      } else if (user.role === 'admin') {
        if (urlType !== 'final-all' && urlType !== 'final-admin') {
          Router.push('/admin/dashboard');
        }
      }
    } else if (urlType !== 'auth') {
      Router.push('/login');
    }
  }, [user, urlType]);

  return { user };
}
