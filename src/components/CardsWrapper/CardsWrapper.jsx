import Card from "../Card/Card";
import "./CardsWrapper.scss";
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
} from "../Icons";

export default function CardsWrapper() {
  return (
    <div className="cardsWrapper">
      <Card size="big" icon={<InclineBed />} title="Incline Bed" />
      <Card size="big" icon={<LayDown />} title="Lay Down" />
      <Card size="big" icon={<SitUp />} title="Sit Up" />

      <Card size="big" icon={<NeedMedicine />} title="Need Medicine" />
      <Card size="big" icon={<NurseOrDoctor />} title="Nurse or Doctor" />
      <Card size="big" icon={<Pain />} title="In Pain" />

      <Card size="big" icon={<FoodDrink />} title="Food/Drink" />
      <Card size="big" icon={<Tv />} title="TV" />
      <Card size="big" icon={<Bath />} title="Bath" />

      <Card size="big" icon={<ChangeBed />} title="Change Bed" />
      <Card size="big" icon={<Emotions />} title="Emotions" />
      <Card size="big" title="Yes / No" />
    </div>
  );
}
