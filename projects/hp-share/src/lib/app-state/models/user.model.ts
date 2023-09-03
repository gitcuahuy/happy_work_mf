import {BaseCredential} from "../../auth/model/base-cridential.model";
import {AuditableModel} from "../../auth/model/auditable.model";
import {AccountType, Gender, IRole, IUserPrimary, UserLevel, UserStatus} from "../../auth/model/user/user.model";
import CommonUtils from "../../utils/CommonUtils";
import {AuthedResponse} from "../../auth/model/authedResponse";

export interface IUser extends BaseCredential, AuditableModel {
  gender?: Gender;
  roleIds?: string[];
  userLevel?: UserLevel;
  accountType?: AccountType;
  lastLoginAt?: string;
  lastAuthChangeAt?: string;
  userPrimary?: IUserPrimary;
  departmentName?: string;
  latitude?: number;
  longitude?: number;
  code?: string;
  id?: string;
  // avatarFileId?: string;
  avatarUrl?: string;
  background?: string;
  fullName?: string;
  username?: string;
  role?: IRole;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  title?: string;
  organizationId?: string;
  dayOfBirth?: Date;
  address?: string;
  description?: string;
  status?: string;

  search_fullName?: string;
  search_partials?: string[];
}

export class User implements  IUser{
  password?: string;

  gender?: Gender;
  roleIds?: string[];
  userLevel?: UserLevel;
  accountType?: AccountType;
  lastLoginAt?: string;
  lastAuthChangeAt?: string;
  userPrimary?: IUserPrimary;
  departmentId?: string;
  departmentName?: string;
  latitude?: number;
  longitude?: number;
  code?: string;
  id?: string;
  avatarFileId?: string;
  avatarUrl?: string;
  background?: string;
  fullName?: string;
  username?: string;
  role?: IRole;
  email?: string; // email công ty
  personal_email?: string; // email cá nhân
  emailVerified?: boolean;
  phoneNumber?: string;
  title?: string;
  organizationId?: string;
  dayOfBirth?: Date;
  address?: string;
  description?: string;
  status?: UserStatus;
  identifyCardNumber?: string; // số căn cước coond dân
  provide?: string; // nơi cấp
  supply_date?: Date; // ngày cấp
  shelter?: string; // nơi ở hiện tại
  placeOfResidence?: string; // nơi thường trú
  taxCode?: string; // mã số thuế
  education?: string; // trình độ học vấn
  school?: string; // trường học
  major?: string; // chuyên ngành
  graduationYear?: Date; // năm tốt nghiệp
  maritalStatus?: string; // tình trạng hôn nhân

  search_fullName?: string;
  search_partials?: string[];
  constructor(user?: IUser) {
    Object.assign(this, user);
    this.search_fullName = CommonUtils.removeAccents(this.fullName || '');
    this.search_partials = CommonUtils.partialSearchField(this.search_fullName);
  }
}
export interface ILoginResponse extends AuthedResponse, IUser {

}


export interface UserState {
  fullName: string;
  email: string;
}
