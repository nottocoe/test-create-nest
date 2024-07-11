import { CreateMemberResponseDto, GetMemberResponseDto } from 'src/application/dtos/member.dtos';
import { CreateMemberSchema } from './schema/member.schema';

export interface IMemberServices {
  findById(memberId: string): Promise<GetMemberResponseDto>;
  createMember(data: CreateMemberSchema): Promise<CreateMemberResponseDto>;
}
