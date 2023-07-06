import { Hotels } from "src/api/hotels/hotel.entity";
import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { ThingToSee } from "../thing-to-see/thing-to-see.entity";
import { TourAccessory } from "../tour-accessories/tour-accessory.entity";
import { Tours } from "../tours/tour.entity";

@Entity()
export class Images extends CommonEntity {
  @Column()
  url: string;

  @ManyToOne(() => Tours, tour => tour.images)
  tour: Tours;

  @ManyToOne(() => Hotels, (hotel) => hotel.images)
  hotel: Hotels;

  @ManyToOne(() => TourAccessory, (accessory) => accessory.images)
  accessory: TourAccessory;

  @ManyToOne(() => ThingToSee, (thingToSee) => thingToSee.images)
  thingToSee: ThingToSee;
}