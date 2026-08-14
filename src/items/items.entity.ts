import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  type: string;

  @Column()
  isActive: boolean;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
