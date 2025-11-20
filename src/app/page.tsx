"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Crown, Github, Globe, Instagram, Linkedin, MessageCircle, Newspaper, Settings, Shield, ShoppingBag, Star, Target, TrendingUp, Trophy, Twitter, User, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Teams", id: "teams" },
            { name: "Drivers", id: "drivers" },
            { name: "News", id: "news" },
            { name: "Shop", id: "shop" },
            { name: "About", id: "about" }
          ]}
          brandName="F1 Teams Hub"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="F1 Teams Championship"
          description="Experience the thrill of Formula 1 with comprehensive team coverage, driver insights, and the latest racing news from the world's premier motorsport championship."
          tag="Formula 1 2024"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Teams", href: "teams" },
            { text: "Latest News", href: "news" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642488153-beo5y6s1.jpg"
          imageAlt="Formula 1 racing cars in action on track"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Formula 1 represents the pinnacle of motorsport, where cutting-edge technology meets human skill and determination on the world's most challenging circuits."
          features={[
            {
              icon: Zap,
              title: "Speed & Performance",
              description: "F1 cars reach speeds over 350 km/h with advanced aerodynamics and hybrid power units delivering over 1000 horsepower."
            },
            {
              icon: Users,
              title: "Global Competition",
              description: "10 teams compete across 23 races worldwide, featuring the best drivers and most innovative automotive technology."
            },
            {
              icon: Target,
              title: "Precision Engineering",
              description: "Every component is optimized for performance, from carbon fiber chassis to advanced telemetry systems."
            },
            {
              icon: Trophy,
              title: "Championship Glory",
              description: "Drivers and constructors battle for world championships in the most prestigious motorsport competition."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="F1 Technology Features"
          description="Discover the advanced technologies that make Formula 1 the pinnacle of motorsport innovation"
          tag="Innovation"
          tagIcon={Settings}
          buttons={[
            { text: "Learn More", href: "technology" }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Advanced Aerodynamics",
              description: "Sophisticated wing designs and ground effect technology that generate massive downforce for superior cornering performance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642490100-t0hqkbj3.jpg",
              imageAlt: "F1 car aerodynamic wing detail"
            },
            {
              id: 2,
              title: "Hybrid Power Units",
              description: "1.6L V6 turbo engines combined with energy recovery systems delivering incredible power and efficiency.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642491483-joe5ph7m.jpg",
              imageAlt: "F1 hybrid power unit engine"
            },
            {
              id: 3,
              title: "Race Strategy",
              description: "Data-driven strategies for tire management, fuel consumption, and pit stop timing that determine race outcomes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642492746-16f2gqz2.jpg",
              imageAlt: "F1 pit stop strategy in action"
            },
            {
              id: 4,
              title: "Safety Innovation",
              description: "Cutting-edge safety systems including the Halo device, HANS system, and advanced crash structures protecting drivers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642493957-v73bq9q1.jpg",
              imageAlt: "F1 safety equipment and systems"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="F1 Merchandise"
          description="Official Formula 1 team merchandise and collectibles for passionate racing fans"
          tag="Official Store"
          tagIcon={ShoppingBag}
          buttons={[
            { text: "View All", href: "shop" }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Team Racing Cap",
              price: "$45",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642495021-ujdflet7.jpg",
              imageAlt: "Official F1 team racing cap"
            },
            {
              id: "2",
              name: "Racing Jacket",
              price: "$120",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642495959-dg8paug0.jpg",
              imageAlt: "F1 team racing jacket"
            },
            {
              id: "3",
              name: "Die-Cast Model Car",
              price: "$85",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642497219-mjoda4w1.jpg",
              imageAlt: "F1 die-cast model collectible car"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Fan Membership Plans"
          description="Choose your level of F1 access and exclusive content"
          tag="Membership"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              price: "$9.99/month",
              name: "Basic Fan",
              buttons: [
                { text: "Get Started", href: "signup" },
                { text: "Learn More", href: "basic-plan" }
              ],
              features: [
                "Live race highlights",
                "Basic race statistics",
                "Team news updates",
                "Mobile app access"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$19.99/month",
              name: "Premium Fan",
              buttons: [
                { text: "Get Started", href: "signup" },
                { text: "Learn More", href: "premium-plan" }
              ],
              features: [
                "Live race streaming",
                "Onboard camera access",
                "Exclusive interviews",
                "Advanced statistics",
                "Driver tracker"
              ]
            },
            {
              id: "3",
              price: "$39.99/month",
              name: "Ultimate Fan",
              buttons: [
                { text: "Get Started", href: "signup" },
                { text: "Learn More", href: "ultimate-plan" }
              ],
              features: [
                "All Premium features",
                "Pit lane channel",
                "Team radio access",
                "VIP paddock content",
                "Early merchandise access"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="F1 Performance Metrics"
          description="Key statistics from the world of Formula 1 racing"
          tag="Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "350+",
              description: "Top Speed (km/h)"
            },
            {
              id: "2",
              value: "1000+",
              description: "Horsepower"
            },
            {
              id: "3",
              value: "23",
              description: "Races per Season"
            },
            {
              id: "4",
              value: "10",
              description: "Constructor Teams"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="F1 Team Professionals"
          description="Meet the experts behind Formula 1 racing teams"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marcus Weber",
              role: "Chief Race Engineer",
              description: "Leading race strategy and car setup optimization with 15 years of F1 experience across multiple championship-winning teams.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642499171-0aoblprx.jpg",
              imageAlt: "Marcus Weber, Chief Race Engineer",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Technical Director",
              description: "Overseeing aerodynamics and chassis development with expertise in cutting-edge F1 technology and innovation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642500535-1qrma8wu.jpg",
              imageAlt: "Sarah Chen, Technical Director",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "3",
              name: "Alessandro Rossi",
              role: "Head Mechanic",
              description: "Managing pit crew operations and mechanical systems with precision timing and world-class technical expertise.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642501840-380azprm.jpg",
              imageAlt: "Alessandro Rossi, Head Mechanic",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "4",
              name: "Emma Thompson",
              role: "Data Analyst",
              description: "Analyzing telemetry data and performance metrics to optimize car setup and race strategies for maximum competitive advantage.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642502952-05bx0i5i.jpg",
              imageAlt: "Emma Thompson, Data Analyst",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What F1 Fans Say"
          description="Real feedback from passionate Formula 1 enthusiasts worldwide"
          tag="Fan Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael",
              handle: "@f1fanatic",
              testimonial: "The coverage and insights provided here are incredible. I finally understand the technical aspects of F1 that make it so exciting!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642504168-s41owevm.jpg",
              imageAlt: "Michael, F1 enthusiast"
            },
            {
              id: "2",
              name: "Lisa Rodriguez",
              handle: "@racingqueen",
              testimonial: "Best F1 content platform I've found. The team profiles and race analysis keep me engaged throughout the season.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642505248-dsgw15ec.jpg",
              imageAlt: "Lisa Rodriguez, racing fan"
            },
            {
              id: "3",
              name: "James Wilson",
              handle: "@speedfreak",
              testimonial: "Being able to follow my favorite teams and drivers with such detailed coverage makes every race weekend special.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642506219-mhbtv3ru.jpg",
              imageAlt: "James Wilson, F1 fan"
            },
            {
              id: "4",
              name: "Emma Chen",
              handle: "@f1newbie",
              testimonial: "As someone new to F1, this platform helped me learn everything from team strategies to technical regulations. Amazing!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642507192-ju19m391.jpg",
              imageAlt: "Emma Chen, new F1 fan"
            },
            {
              id: "5",
              name: "Carlos Santos",
              handle: "@pitlanepro",
              testimonial: "The behind-the-scenes content and team insights you can't find anywhere else. Absolutely essential for any F1 fan.",
              icon: User
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Official F1 Team Partners"
          description="Trusted by Formula 1 teams and racing organizations worldwide"
          tag="Partners"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642512437-td6gt4qj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642513436-a5rb5r8u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642514955-wx5zvqd5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642516289-ae2h65vb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642517502-k622xmo1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642518578-s2a3k19f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642519835-5js2pljw.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about F1 teams and racing"
          textPosition="left"
          buttons={[
            { text: "Contact Support", href: "contact" }
          ]}
          faqs={[
            {
              id: "1",
              title: "How many teams compete in Formula 1?",
              content: "Currently, 10 teams compete in Formula 1, each fielding two cars for a total of 20 drivers on the grid. Teams include Mercedes, Red Bull Racing, Ferrari, McLaren, Alpine, Aston Martin, Williams, AlphaTauri, Alfa Romeo, and Haas."
            },
            {
              id: "2",
              title: "What makes F1 cars so fast?",
              content: "F1 cars combine lightweight carbon fiber construction, powerful hybrid engines producing over 1000 horsepower, advanced aerodynamics creating massive downforce, and sophisticated suspension systems. The combination allows speeds over 350 km/h and incredible cornering performance."
            },
            {
              id: "3",
              title: "How do F1 championships work?",
              content: "There are two championships: the Drivers' Championship (individual drivers) and the Constructors' Championship (teams). Points are awarded based on finishing positions in each race, with 25 points for first place down to 1 point for 10th place, plus bonus points for fastest lap."
            },
            {
              id: "4",
              title: "What is the role of team strategy?",
              content: "Team strategy involves tire selection, pit stop timing, fuel management, and race tactics. Teams use real-time data analysis to make decisions that can determine race outcomes, balancing speed with tire degradation and fuel consumption."
            },
            {
              id: "5",
              title: "How can I follow my favorite F1 team?",
              content: "Our platform provides comprehensive team coverage including driver profiles, race results, technical analysis, behind-the-scenes content, and exclusive interviews. Premium memberships offer additional features like live telemetry and team radio access."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest F1 News"
          description="Stay updated with the latest Formula 1 news, race reports, and team updates"
          tag="F1 News"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Race Report",
              title: "Championship Battle Intensifies",
              excerpt: "Analyzing the latest race results and their impact on the drivers' and constructors' championships with detailed performance metrics.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642508487-w6iv8msi.jpg",
              imageAlt: "F1 championship battle coverage",
              authorName: "Alex Morgan",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642504168-s41owevm.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Technical",
              title: "New Aerodynamic Regulations Impact",
              excerpt: "How the latest technical regulation changes are affecting car performance and team strategies for the upcoming season.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642509758-oiitrj3n.jpg",
              imageAlt: "F1 technical regulations analysis",
              authorName: "Sarah Mitchell",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642505248-dsgw15ec.jpg",
              date: "Dec 12, 2024"
            },
            {
              id: "3",
              category: "Team Update",
              title: "Driver Market Moves",
              excerpt: "Latest driver transfers and team lineup changes that will shape the competitive landscape for next season.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642511122-05r8vgrv.jpg",
              imageAlt: "F1 driver transfers news",
              authorName: "David Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763642506219-mhbtv3ru.jpg",
              date: "Dec 10, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Join the Community"
          tagIcon={Users}
          title="Stay Connected with F1 Teams"
          description="Get exclusive updates, race insights, and behind-the-scenes content delivered directly to your inbox. Join thousands of passionate F1 fans."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive F1 updates and can unsubscribe anytime. We respect your privacy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Teams",
              items: [
                { label: "Mercedes", href: "mercedes" },
                { label: "Red Bull", href: "red-bull" },
                { label: "Ferrari", href: "ferrari" },
                { label: "McLaren", href: "mclaren" }
              ]
            },
            {
              title: "Content",
              items: [
                { label: "Race Results", href: "results" },
                { label: "Standings", href: "standings" },
                { label: "News", href: "news" },
                { label: "Analysis", href: "analysis" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Fan Forum", href: "forum" },
                { label: "Membership", href: "membership" },
                { label: "Events", href: "events" },
                { label: "Support", href: "support" }
              ]
            }
          ]}
          brandName="F1 Teams Hub"
          copyrightText="© 2024 | F1 Teams Hub"
        />
      </div>
    </ThemeProvider>
  );
}