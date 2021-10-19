import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'form' })
  
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mail: string;

   @Column("text")
  message: string;

  @Column({ default: false })
  isComplited: boolean;
}