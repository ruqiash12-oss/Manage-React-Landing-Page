import { FeatureItem } from "./FeatureItem";
import { FeatureList } from "./FeatureList";
import './Features.css';
export function Features() {
  return (
    <section className="features">
      <FeatureItem />
      <FeatureList />
    </section>
  );
}