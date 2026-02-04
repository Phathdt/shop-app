import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  FacebookIcon,
  InstagramIcon,
  NewTwitterIcon,
  Linkedin01Icon,
  Mail01Icon,
  TelephoneIcon,
  Location01Icon,
} from "@hugeicons/core-free-icons"

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "#about", label: "About Us" },
  { to: "#contact", label: "Contact" },
]

const customerService = [
  { to: "#", label: "FAQ" },
  { to: "#", label: "Shipping Info" },
  { to: "#", label: "Returns & Exchanges" },
  { to: "#", label: "Track Order" },
]

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: NewTwitterIcon, href: "#", label: "Twitter" },
  { icon: Linkedin01Icon, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-bold">
              ShopApp
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Your favorite online store for quality products at great prices.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
                  aria-label={social.label}
                >
                  <HugeiconsIcon icon={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              {customerService.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <HugeiconsIcon icon={Location01Icon} className="mt-0.5 size-4 shrink-0" />
                <span>123 Commerce St, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <HugeiconsIcon icon={TelephoneIcon} className="size-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <HugeiconsIcon icon={Mail01Icon} className="size-4 shrink-0" />
                <span>support@shopapp.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ShopApp. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded border px-2 py-1 font-medium">Visa</span>
            <span className="rounded border px-2 py-1 font-medium">Mastercard</span>
            <span className="rounded border px-2 py-1 font-medium">PayPal</span>
            <span className="rounded border px-2 py-1 font-medium">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
