import { html } from "hono/html";

interface Props {
  title?: string;
  children: any;
}

const BasicLayout = ({ title = "Minimatic Website", children }: Props) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>
        ${title} - Minimatic Solutions | Leading Software Development Company |
        Web Development, AI Solutions, Digital Transformation
      </title>

      <!-- Meta -->
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <!-- Primary Meta Tags -->
      <meta
        name="description"
        content="Minimatic Solutions is Bangladesh's leading software development company specializing in web development, mobile app development, AI & machine learning solutions, cloud computing, and digital transformation services. Expert team delivering innovative technology solutions for businesses worldwide."
      />
      <meta name="author" content="Minimatic Solutions" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      <!-- Keywords -->
      <meta
        name="keywords"
        content="software development company, web development bangladesh, mobile app development, AI solutions, machine learning services, cloud computing, digital transformation, custom software development, react development, node.js development, python development, fullstack development, UI/UX design, database design, API development, microservices, DevOps services, software consulting, technology solutions, minimatic solutions, rajshahi software company, bangladesh software company, web development rajshahi, app development bangladesh, AI development bangladesh,rajshahi software company, bangladesh software company, web development rajshahi, app development bangladesh, AI development bangladesh, minimatic solutions, software development rajshahi, software development bangladesh, IT services bangladesh, custom software solutions, enterprise software development, startup software development, SaaS development, e-commerce development, fintech solutions, healthcare software development, educational software solutions, cloud-native applications, progressive web apps, responsive web design, cross-platform mobile apps"
      />

      <!-- Canonical URL -->
      <link rel="canonical" href="https://minimatic.solutions/" />
      <meta name="canonical" content="https://minimatic.solutions/" />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://minimatic.solutions/" />
      <meta
        property="og:title"
        content="Minimatic Solutions - Leading Software Development Company | Innovation & Excellence"
      />
      <meta
        property="og:description"
        content="Transform your business with cutting-edge software solutions. We deliver web development, mobile apps, AI solutions, and digital transformation services with excellence and innovation."
      />
      <meta
        property="og:image"
        content="https://minimatic.solutions/images/minimatic-solution.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Minimatic Solutions - Software Development Company"
      />
      <meta property="og:site_name" content="Minimatic Solutions" />
      <meta property="og:locale" content="en_US" />

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://minimatic.solutions/" />
      <meta
        property="twitter:title"
        content="Minimatic Solutions - Leading Software Development Company | Innovation & Excellence"
      />
      <meta
        property="twitter:description"
        content="Transform your business with cutting-edge software solutions. Expert web development, mobile apps, AI solutions, and digital transformation services."
      />
      <meta
        property="twitter:image"
        content="https://minimatic.solutions/images/minimatic-solution.png"
      />
      <meta
        property="twitter:image:alt"
        content="Minimatic Solutions - Software Development Company"
      />

      <!-- Additional Meta Tags -->
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content="Minimatic Solutions" />
      <meta name="apple-mobile-web-app-title" content="Minimatic Solutions" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <!-- Business Verification -->
      <meta
        name="google-site-verification"
        content="rk2vFBEpXh4mYSI0d8YI6RvNB3t2TMWkI6WOznUNCa8"
      />

      <meta name="msvalidate.01" content="8541538B77CCF1439409EE470B76E1A6" />

      <!-- Geo Location -->
      <meta name="geo.region" content="BD-54" />
      <meta name="geo.placename" content="Rajshahi" />
      <meta name="geo.position" content="24.3745;88.6042" />
      <meta name="ICBM" content="24.3745, 88.6042" />

      <!-- Company Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Minimatic Solutions",
          "alternateName": "Minimatic",
          "description": "Leading software development company delivering full-cycle software solutions that empower businesses to grow, innovate, and succeed through cutting-edge technology.",
          "url": "https://minimatic.solutions",
          "logo": "https://minimatic.solutions/images/minimatic-solutions.png",
          "image": "https://minimatic.solutions/images/minimatic-solutions.png",
          "foundingDate": "2020",
          "legalName": "Minimatic Solutions",
          "slogan": "Delivering Excellence in Software Innovation",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Padma Garden, Road No 3, Padma Abasahik",
            "addressLocality": "Rajshahi",
            "addressRegion": "Rajshahi Division",
            "postalCode": "6000",
            "addressCountry": "BD"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.3745",
            "longitude": "88.6042"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+8801723100925",
              "contactType": "customer service",
              "availableLanguage": ["English", "Bengali"],
              "areaServed": "Worldwide"
            },
            {
              "@type": "ContactPoint",
              "email": "contact@minimatic.solutions",
              "contactType": "customer service",
              "availableLanguage": ["English", "Bengali"]
            },
            {
              "@type": "ContactPoint",
              "email": "info@minimatic.solutions",
              "contactType": "customer support",
              "availableLanguage": ["English", "Bengali"]
            }
          ],
          "sameAs": [
            "https://x.com/shahinali_dev",
            "https://www.linkedin.com/company/minimatic-solutions/",
            "https://github.com/Minimatic-Solution",
            "https://www.facebook.com/minimaticsolutions",
            "https://www.instagram.com/minimaticsolutions"
          ],
          "areaServed": [
            {
              "@type": "Country",
              "name": "Bangladesh"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "serviceType": [
            "Web Development",
            "Mobile App Development",
            "AI & Machine Learning Solutions",
            "Cloud Computing Services",
            "Digital Transformation",
            "Custom Software Development",
            "UI/UX Design",
            "DevOps Services",
            "Database Design",
            "API Development",
            "Microservices Architecture"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Web Development",
                "description": "Custom web application development using modern frameworks"
              },
              {
                "@type": "OfferCatalog",
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile application development"
              },
              {
                "@type": "OfferCatalog",
                "name": "AI & ML Solutions",
                "description": "Artificial Intelligence and Machine Learning implementation"
              }{
                "@type": "OfferCatalog",
                "name": "Cloud Solutions",
                "description": ""Cloud computing services including AWS, Azure, and Google Cloud"
              },
              {
              "@type": "OfferCatalog",
              "name": "E-commerce Solutions",
              "description": "E-commerce platform development and integration"
              },
              {
                "@type": "OfferCatalog",
                "name": "Consulting & Strategy",
                "description": "Technology consulting and digital transformation strategy"
              }
            ]
          },
          "employee": [
            {
              "@type": "Person",
              "name": "Shahin Ali",
              "jobTitle": "CEO & Lead Developer",
              "sameAs": "https://x.com/shahinali_dev"
            }
          ]
        }
      </script>

      <!-- Website Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Minimatic Solutions",
          "alternateName": "Minimatic",
          "url": "https://minimatic.solutions",
          "description": "Leading software development company providing comprehensive technology solutions including web development, mobile apps, AI solutions, and digital transformation services.",
          "inLanguage": "en-US",
          "publisher": {
            "@type": "Organization",
            "name": "Minimatic Solutions"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://minimatic.solutions/#search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      </script>

      <!-- Professional Service Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Minimatic Solutions - Software Development Services",
          "description": "Professional software development services including web development, mobile app development, AI solutions, cloud computing, and digital transformation for businesses worldwide.",
          "provider": {
            "@type": "Organization",
            "name": "Minimatic Solutions",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rajshahi",
              "addressCountry": "Bangladesh"
            }
          },
          "areaServed": ["Bangladesh", "Worldwide"],
          "availableLanguage": ["English", "Bengali"],
          "category": "Software Development",
          "serviceType": [
            "Web Application Development",
            "Mobile Application Development",
            "Full-Stack Development",
            "Frontend Development",
            "Backend Development",
            "AI & Machine Learning Development",
            "Cloud Solutions Architecture",
            "Database Design & Optimization",
            "API Development & Integration",
            "Microservices Architecture",
            "DevOps & CI/CD Implementation",
            "UI/UX Design Services",
            "Digital Transformation Consulting",
            "Software Maintenance & Support"
          ],
          "url": "https://minimatic.solutions",
          "telephone": "+8801723100925",
          "email": "contact@minimatic.solutions"
        }
      </script>

      <!-- Local Business Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Minimatic Solutions",
          "image": "https://minimatic.solutions/assets/images/minimatic-office.jpg",
          "description": "Leading software development company in Rajshahi, Bangladesh, providing innovative technology solutions globally.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Padma Garden, Road No 3, Padma Abasahik",
            "addressLocality": "Rajshahi",
            "addressRegion": "Rajshahi Division",
            "postalCode": "6000",
            "addressCountry": "BD"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.3745,
            "longitude": 88.6042
          },
          "url": "https://minimatic.solutions",
          "telephone": "+8801723100925",
          "email": "contact@minimatic.solutions",
          "openingHours": "Mo-Fr 09:00-18:00",
          "sameAs": [
            "https://www.linkedin.com/company/minimatic-solutions/",
            "https://github.com/Minimatic-Solution"
          ]
        }
      </script>

      <!-- Breadcrumb Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://minimatic.solutions/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://minimatic.solutions/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "About",
              "item": "https://minimatic.solutions/#about"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contact",
              "item": "https://minimatic.solutions/#contact"
            }{
              "@type": "ListItem",
              "position": 4,
              "name": "Portfolio",
              "item": "https://minimatic.solutions/#portfolio"
            }
          ]
        }
      </script>

      <!-- FAQ Structured Data -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Minimatic Solutions provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimatic Solutions provides comprehensive software development services including web development, mobile app development, AI & machine learning solutions, cloud computing, digital transformation, custom software development, UI/UX design, E-commerce Solutions, Consulting & Strategy and DevOps services."
              }
            },
            {
              "@type": "Question",
              "name": "Where is Minimatic Solutions located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimatic Solutions is headquartered in Rajshahi, Bangladesh, but we serve clients worldwide with our remote-first approach."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies does Minimatic Solutions specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in modern technologies including React, Node.js, Python, TypeScript, cloud platforms (AWS, Azure), AI/ML frameworks, mobile development (React Native, Flutter), and database technologies (PostgreSQL, MongoDB)."
              }
            }
          ]
        }
      </script>

      <!-- Favicon -->

      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" sizes="16x16" href="/favicon/favicon-16x16.png" />

      <!-- Preconnect for Performance -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <!-- DNS Prefetch -->
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      <!-- Styles -->
      <link href="/css/output.css" rel="stylesheet" />
    </head>
    <body class="antialiased bg-white text-gray-900">
      ${children}
    </body>
  </html>
`;

export default BasicLayout;
