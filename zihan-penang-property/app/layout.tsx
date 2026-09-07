import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://zihanproperty.com'),
  title:{default:'ZiHan | Find the Right Penang Property',template:'%s | ZiHan Penang Property'},
  description:'Discover Penang properties by budget, lifestyle and purpose. Compare projects, estimate affordability and WhatsApp ZiHan for latest availability.',
  openGraph:{title:'ZiHan | Penang Property Finder',description:'A smarter way to discover Penang property.',type:'website'},
  robots:{index:true,follow:true}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><Analytics/><Header/>{children}<Footer/><FloatingWhatsApp/></body></html>
}
