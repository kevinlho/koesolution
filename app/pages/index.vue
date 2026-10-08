<script setup lang="ts">
import LandingHeader from '~/components/header/LandingHeader.vue'
import LandingHero from '~/components/landing/LandingHero.vue'
import LandingService from '~/components/landing/LandingService.vue'
import LandingStats from '~/components/landing/LandingStats.vue'
import LandingPortfolio from '~/components/landing/LandingPortfolio.vue'
import LandingWhyUs from '~/components/landing/LandingWhyUs.vue'
import LandingProcess from '~/components/landing/LandingProcess.vue'
import LandingTestimonials from '~/components/landing/LandingTestimonials.vue'
import LandingCta from '~/components/landing/LandingCta.vue'
import LandingFooter from '~/components/landing/LandingFooter.vue'
import WhatsappFloatingButton from '~/components/button/WhatsappFloatingButton.vue'
</script>

<template>
  <div class="bg-white text-slate-900">
    <LandingHeader />
    <LandingHero />
    <LandingService />
    <LandingStats />
    <LandingPortfolio />
    <LandingWhyUs />
    <LandingProcess />
    <LandingTestimonials />
    <LandingCta />
    <LandingFooter />
    <WhatsappFloatingButton />
  </div>
</template>
