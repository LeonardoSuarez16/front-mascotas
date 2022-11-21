import { ObjectUnsubscribedErrorCtor } from "rxjs/internal/util/ObjectUnsubscribedError";
import { ModeloUsuario } from "./datos.modelo";

export class ModeloIdentificar{
    datos?: ModeloUsuario;
    tk?: string;
    estaIdentificado: boolean = false;
}