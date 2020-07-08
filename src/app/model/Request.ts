import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('Request')
export class Request {

  @JsonProperty('id', Number)
  id: number = undefined;

  @JsonProperty('roles', [String])
  roles: string[] = undefined;

  @JsonProperty('username', String)
  email: string = undefined;

  public constructor(init?: Partial<Request>) {
    Object.assign(this, init);
  }
}
