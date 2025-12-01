import { usePathname } from "next/navigation";

const authPages = [
  '/create-account',
  '/create-password',
  '/login',
  '/recovery-password',
  '/recovery-success',
  '/sms-confirmation',
  '/new-password',
  '/contact-info'
];

export function useAuthPage() {
  const pathname = usePathname();
  const isAuthPage = authPages.some(page => pathname?.startsWith(page));
  
  return { isAuthPage, pathname };
}
