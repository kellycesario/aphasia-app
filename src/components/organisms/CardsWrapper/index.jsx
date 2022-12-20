import Card from "@molecules/Card";
import "./styles.scss";
import {
  Bath,
  ChangeBed,
  Emotions,
  FoodDrink,
  InclineBed,
  LayDown,
  NeedMedicine,
  NurseOrDoctor,
  Pain,
  SitUp,
  Tv,
} from "@ions";

export default function CardsWrapper() {
  return (
    <div className="cardsWrapper">
      <Card size="big" icon={<InclineBed size="70" />} title="Incline Bed" />
      <Card size="big" icon={<LayDown size="70" />} title="Lay Down" />
      <Card size="big" icon={<SitUp size="70" />} title="Sit Up" />

      <Card
        size="big"
        icon={<NeedMedicine size="70" />}
        title="Need Medicine"
      />
      <Card
        size="big"
        icon={<NurseOrDoctor size="70" />}
        title="Nurse or Doctor"
      />
      <Card size="big" icon={<Pain size="70" />} title="In Pain" />

      <Card size="big" icon={<FoodDrink size="70" />} title="Food/Drink" />
      <Card size="big" icon={<Tv size="70" />} title="TV" />
      <Card size="big" icon={<Bath size="70" />} title="Bath" />

      <Card size="big" icon={<ChangeBed size="70" />} title="Change Bed" />
      <Card size="big" icon={<Emotions size="70" />} title="Emotions" />
      <Card size="bigger" title="Yes / No" />
    </div>
  );
}
