import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { DivInformacionBasica, TituloFormulario, DivGrid, DivGridItem, Label, Input, Select, Button } from './styles';

const FormularioCrearActivo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorFormulario, setErrorFormulario] = useState("");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [resultadoTipos, setResultadoTipos] = useState({ respuesta: 'KO' });
    const [resultadoAreas, setResultadoAreas] = useState({ respuesta: 'KO' });
    const [resultadoPersonas, setResultadoPersonas] = useState({ respuesta: 'KO' });
    const onSubmit = (data, e) => {

        setMensajeFormulario("");
        setErrorFormulario("");
        var activo = {
            name: data.name,
            descripción: data.descripcion,
            tipo: {
                id: data.tipo
            },
            persona: {
                id: data.persona,
            },
            area: {
                id: data.area
            },
            serial: data.serial,
            numero: data.numero,
            peso: data.peso,
            alto: data.alto,
            ancho: data.ancho,
            largo: data.largo,
            valor: data.valor,
            fecha: data.fecha
        }




        axios({
            method: 'post',
            url: 'http://localhost:8181/activos/create/activo',
            data: activo
        })
            .then(function (response) {
                e.target.reset();
                setMensajeFormulario("El activo fue guardado correctamente")
            })
            .catch(function (error) {
                e.target.reset();
                setErrorFormulario("Ocurrio un error al crear el Activo");
            });
    }

    useEffect(() => {
        const consultarTipos = async () => {
            axios.get("http://localhost:8181/activos/tipos").then(response => {

                console.log(response.data);
                setResultadoTipos(response.data)

            })
        };


        consultarTipos();
    }, []);

    useEffect(() => {
        const consultarAreas = async () => {
            axios.get("http://localhost:8181/activos/areas").then(response => {

                console.log(response.data);
                setResultadoAreas(response.data)

            })
        };


        consultarAreas();
    }, []);

    useEffect(() => {
        const consultarPersonas = async () => {
            axios.get("http://localhost:8181/activos/personas").then(response => {

                console.log(response.data);
                setResultadoPersonas(response.data)

            })
        };


        consultarPersonas();
    }, []);

    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>
            {mensajeFormulario !== "" ?
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    <strong>{mensajeFormulario}</strong>
                </Alert>
                : null}
            {errorFormulario !== "" ?
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <strong>{errorFormulario}</strong>
                </Alert>
                : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <DivInformacionBasica>
                    <TituloFormulario>Información Básica</TituloFormulario>
                    <DivGrid>

                        <DivGridItem>
                            <Label htmlFor="name">Nombre</Label>

                            <Input
                                id="name"
                                aria-invalid={errors.name ? "true" : "false"}
                                {...register('name', { required: true, maxLength: 30 })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.name && errors.name.type === "required" && (
                                <span role="alert">Debe registrar el nombre</span>
                            )}
                            {errors.name && errors.name.type === "maxLength" && (
                                <span role="alert">el nombre no puede exceder 30 caracteres </span>
                            )}

                        </DivGridItem>
                        <DivGridItem>

                            <Label htmlFor="name">Serial</Label>

                            <Input
                                id="serial"
                                aria-invalid={errors.serial ? "true" : "false"}
                                {...register('serial', { required: true, maxLength: 15 })}
                            />

                            {errors.serial && errors.serial.type === "required" && (
                                <span role="alert">Debe registrar el serial</span>
                            )}
                            {errors.serial && errors.serial.type === "maxLength" && (
                                <span role="alert">El serial no puede exceder 15 caracteres </span>
                            )}
                        </DivGridItem>

                        <DivGridItem>
                            <Label htmlFor="name">Peso</Label>

                            <Input
                                id="peso"
                                type="number"
                                aria-invalid={errors.peso ? "true" : "false"}
                                {...register('peso', { required: true, max: 999 })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.peso && errors.peso.type === "required" && (
                                <span role="alert">Debe registrar el peso</span>
                            )}
                            {errors.peso && errors.peso.type === "max" && (
                                <span role="alert">No debe sobrepasar 3 digitos</span>
                            )}

                        </DivGridItem>
                        <DivGridItem>

                            <Label htmlFor="name">Ancho</Label>

                            <Input
                                type="number"
                                id="ancho"
                                aria-invalid={errors.ancho ? "true" : "false"}
                                {...register('ancho', { required: true, max: 999 })}
                            />

                            {errors.ancho && errors.ancho.type === "required" && (
                                <span role="alert">Debe registrar el ancho</span>
                            )}
                            {errors.ancho && errors.ancho.type === "max" && (
                                <span role="alert">No debe sobrepasar 3 digitos</span>
                            )}
                        </DivGridItem>

                        <DivGridItem>
                            <Label htmlFor="name">Largo</Label>

                            <Input
                                type="number"
                                id="largo"
                                aria-invalid={errors.largo ? "true" : "false"}
                                {...register('largo', { required: true, max: 999 })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.largo && errors.largo.type === "required" && (
                                <span role="alert">Debe registrar el largo</span>
                            )}
                            {errors.largo && errors.largo.type === "max" && (
                                <span role="alert">No debe sobrepasar 3 digitos</span>
                            )}

                        </DivGridItem>
                        <DivGridItem>

                            <Label htmlFor="name">Alto</Label>

                            <Input
                                type="number"
                                id="alto"
                                aria-invalid={errors.alto ? "true" : "false"}
                                {...register('alto', { required: true, max: 999 })}
                            />

                            {errors.alto && errors.alto.type === "required" && (
                                <span role="alert">Debe registrar el alto</span>
                            )}
                            {errors.alto && errors.alto.type === "max" && (
                                <span role="alert">No debe sobrepasar 3 digitos</span>
                            )}
                        </DivGridItem>


                        <DivGridItem>
                            <Label htmlFor="name">Número</Label>

                            <Input
                                type="number"
                                id="numero"
                                aria-invalid={errors.numero ? "true" : "false"}
                                {...register('numero', { required: true })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.numero && errors.numero.type === "required" && (
                                <span role="alert">Debe registrar el numero</span>
                            )}


                        </DivGridItem>
                        <DivGridItem>

                            <Label htmlFor="name">Valor</Label>

                            <Input
                                type="number"
                                id="valor"
                                aria-invalid={errors.valor ? "true" : "false"}
                                {...register('valor', { required: true })}
                            />


                            {errors.valor && errors.valor.type === "required" && (
                                <span role="alert">Debe registrar el valor</span>
                            )}

                        </DivGridItem>
                        <DivGridItem>

                            <Label htmlFor="name">Fecha</Label>

                            <Input
                                type="date"
                                id="fecha"

                                aria-invalid={errors.fecha ? "true" : "false"}
                                {...register('fecha', { required: true })}
                            />
                            {errors.fecha && errors.fecha.type === "required" && (
                                <span role="alert">Debe registrar la fecha</span>
                            )}


                        </DivGridItem>
                        <DivGridItem>

                            <Label>Tipo de Activo</Label>
                            <Select {...register("tipo", { required: true })}>
                                <option value="">Seleccione...</option>
                                {Object.keys(resultadoTipos).map(key => {

                                    return (
                                        <option value={resultadoTipos[key]['id']}>{resultadoTipos[key]['name']}</option>

                                    )

                                })}
                            </Select>
                            {errors.tipo && errors.tipo.type === "required" && (
                                <span role="tipo">Debe registrar el tipo</span>
                            )}

                        </DivGridItem>
                        <DivGridItem>

                            <Label>Area</Label>
                            <Select {...register("area")}>
                                <option value="">Seleccione...</option>
                                {Object.keys(resultadoAreas).map(key => {



                                    return (
                                        <option value={resultadoAreas[key]['id']}>{resultadoAreas[key]['name'] !== undefined ? resultadoAreas[key]['name'] + ' - ' + resultadoAreas[key]['ciudad'].name : null}</option>

                                    )

                                })}
                            </Select>

                        </DivGridItem>

                        <DivGridItem>

                            <Label>Persona</Label>
                            <Select {...register("persona")}>
                                <option value="">Seleccione...</option>
                                {Object.keys(resultadoPersonas).map(key => {



                                    return (
                                        <option value={resultadoPersonas[key]['id']}>{resultadoPersonas[key]['name'] !== undefined ? resultadoPersonas[key]['name'] : null}</option>

                                    )

                                })}
                            </Select>

                        </DivGridItem>

                        
                    </DivGrid>
                    <DivGridItem>

                            <Label htmlFor="name">Descripcion</Label>

                            <textarea
                                rows="10"
                                id="descripcion"
                                aria-invalid={errors.valor ? "true" : "false"}
                                {...register('descripcion', { required: true })}
                            />


                            {errors.descripcion && errors.descripcion.type === "required" && (
                                <span role="alert">Debe registrar la descripcion</span>
                            )}

                        </DivGridItem>
                </DivInformacionBasica>

                <Button type="submit" className="btn btn-primary">Enviar</Button>

            </form>

        </div>
    )


};

export default FormularioCrearActivo;