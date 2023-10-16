import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class ProducerInfo {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @Matches(/^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,10}$/, {
    message: 'Plasse enter a valid password',
  })
  password: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  productname: string;
  @IsNotEmpty()
  productquantity: number;
}

export class ProducerUpdateInfo {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @Matches(/^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,10}$/, {
    message: 'Plasse enter a valid password',
  })
  password: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  productname: string;
  @IsNotEmpty()
  productquantity: number;
}
