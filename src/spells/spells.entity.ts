import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Spells {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  level: number;

  @Column({ nullable: true })
  school: string;

  @Column()
  isActive: boolean;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
