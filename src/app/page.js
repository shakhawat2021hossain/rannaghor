import LatestFromBlog from "@/components/Blog";
import WhyChooseUs from "@/components/Choose";
import FeaturedRecipes from "@/components/FeaturedRecipe";
import HeroSection from "@/components/Hero";
import NewsletterSubscription from "@/components/Subscription";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedRecipes/>
      <WhyChooseUs/>
      <Testimonials/>
      <LatestFromBlog/>
      <NewsletterSubscription/>
    </div>
  );
}
