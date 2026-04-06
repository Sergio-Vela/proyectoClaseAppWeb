export interface MaterialDto {
    id: number;
    nombre: string;
    descripcion: string;
    categoriaId: number;
    stockActual: number;
    stockMinimo: number;
    unidadMedida: string;
}
