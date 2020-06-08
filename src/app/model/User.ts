import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('User')
export class User {

  @JsonProperty('id', Number)
  id: number = undefined;

  @JsonProperty('roles', [String])
  roles: string[] = undefined;

  @JsonProperty('username', String)
  email: string = undefined;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
