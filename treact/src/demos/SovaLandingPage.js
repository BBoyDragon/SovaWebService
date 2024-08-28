import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from"components/features/VerticalWithAlternateImageAndText"// "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Groups from "components/cards/ThreeColSlider";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import Faq from "components/faqs/SingleCol"
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter";

export default () => (
    <AnimationRevealPage>
        <Hero />
        <Features />
        {/*<Blog />*/}
        <Testimonial />
        <Blog />
        <Faq/>
        <Groups/>
        <Footer />
    </AnimationRevealPage>
);
