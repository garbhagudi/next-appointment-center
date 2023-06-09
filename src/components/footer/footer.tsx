import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const navigation = {
  about: [
    { name: "Vision & Mission", href: "/about/vision-and-mission" },
    { name: "Directors", href: "/about/overview" },
    {
      name: "Awards",
      href: "/about/awards-and-accolades",
    },
    { name: "Dr Asha S Vijay", href: "https://drashasvijay.com" },
  ],
  quickLinks: [
    { name: "IVF Treatment", href: "/treatments/in-vitro-fertilization-ivf" },
    {
      name: "IUI Treatment",
      href: "/treatments/intra-uterine-insemination-iui",
    },
    {
      name: "Treatment Pricing",
      href: "/treatments/ivf-treatment-cost-in-bangalore",
    },
  ],
  support: [
    { name: "GG CARE", href: "/gg-care" },
    { name: "Diagnosis", href: "/resources/diagnosis" },
    { name: "Treatment", href: "/resources/treatments" },
    { name: "Career", href: "/careers" },
  ],
  company: [
    { name: "GarbhaGudi", href: "/about/overview" },
    { name: "GGIRHR", href: "https://ggirhr.com" },
    { name: "GarbhaGnan", href: "https://garbhagnan.org" },
    { name: "Pharmacy", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "/legal/privacy-policy" },
    { name: "Terms", href: "/legal/terms-and-conditions" },
    { name: "Refund Policy", href: "/legal/refund-policy" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-neutral-50 font-content"
      aria-labelledby="footerHeading"
      id="footer"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:py-8 lg:px-8 border-t">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-12 grid grid-cols-1 xl:grid-cols-1 gap-8 xl:mt-0 xl:col-span-full text-center antialiased">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
              <div className="">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  About
                </h3>
                <ul className="mt-4 space-y-1">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer text-xs hover:text-sm md:text-sm md:hover:text-base">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-1">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer text-xs hover:text-sm md:text-sm md:hover:text-base">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  Companies
                </h3>
                <ul className="mt-4 space-y-1">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer text-xs hover:text-sm md:text-sm md:hover:text-base">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  Quicklinks
                </h3>
                <ul className="mt-4 space-y-1">
                  {navigation.quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer text-xs hover:text-sm md:text-sm md:hover:text-base">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-1">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className=" text-brandDark hover:text-brandPink hover:underline cursor-pointer text-xs hover:text-sm md:text-sm md:hover:text-base">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-200 ">
        <div className="mt-8 space-x-2 flex items-ceter justify-center">
          <SocialIcon
            url="https://www.youtube.com/c/GarbhaGudiIVFCentre"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/garbhagudiIVF/"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/garbagudi"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=918884183338&text=Hi."
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://twitter.com/garbhagudiivf"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
          <SocialIcon
            url="mailto:dreams@garbhagudi.com"
            style={{ width: "40px", height: "40px" }}
            target="_blank"
          />
        </div>
        <p className="font-content text-gray-900 text-center py-8">
          &copy; {new Date().getFullYear()} GarbhaGudi IVF Centre, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
