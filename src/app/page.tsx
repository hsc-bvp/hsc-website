import Hero from '@/components/hero';
import About from '@/components/About';
import Vision from '@/components/Vision';
import Events from '@/components/Events';
import Faculty from '@/components/Faculty';
import LogoSlider from '@/components/LogoSlider';
import StudentCoordinators from '@/components/StudentCoordinators';
import Alumni from '@/components/Alumni';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Vision />
      <Events />
      <Alumni />
      <LogoSlider />
      <Faculty />
      <StudentCoordinators />
    </main>
  );
}
