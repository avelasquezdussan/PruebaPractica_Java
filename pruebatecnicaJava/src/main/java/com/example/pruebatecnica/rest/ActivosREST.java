package com.example.pruebatecnica.rest;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.pruebatecnica.dao.ActivosDAO;
import com.example.pruebatecnica.dao.AreaDAO;
import com.example.pruebatecnica.dao.PersonaDAO;
import com.example.pruebatecnica.dao.TipoDAO;
import com.example.pruebatecnica.entitys.Activo;
import com.example.pruebatecnica.entitys.Area;
import com.example.pruebatecnica.entitys.Persona;
import com.example.pruebatecnica.entitys.Tipo;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@RestController
@RequestMapping("/activos")
@CrossOrigin("*")
public class ActivosREST {

	@Autowired
	private ActivosDAO activosDAO;
	@Autowired
	private AreaDAO areaDAO;
	@Autowired
	private TipoDAO tipoDAO;
	@Autowired
	private PersonaDAO personaDAO;

	private static final Logger logger = LoggerFactory.getLogger(ActivosREST.class);

	@RequestMapping(value = "todos", method = RequestMethod.GET)
	public ResponseEntity<Object> getActivo() {

		Map<String, Object> map = new HashMap<String, Object>();

		List<Activo> activos = activosDAO.findAll();
		HttpStatus status = HttpStatus.NO_CONTENT;

		System.out.println(activos.size());
		if (activos.size() == 0) {
			System.out.println("entre a 0");
			map.clear();
			map.put("timestamp", new Date());
			map.put("status", HttpStatus.NO_CONTENT);
			map.put("isSuccess", false);
			map.put("message", "No hay resultados");
			map.put("data", null);
			return ResponseEntity.badRequest().body(map);
		}

		else {
			map.clear();
			map.put("timestamp", new Date());
			map.put("isSuccess", true);
			map.put("status", HttpStatus.OK);
			map.put("data", activos);

			return ResponseEntity.ok(map);

		}

	}

	@PostMapping("/create/tipo")
	public ResponseEntity<Tipo> createTipo(@RequestBody Tipo tipo) {

		try {
			Tipo tipoCrear = tipoDAO.save(new Tipo(tipo.getName()));
			return new ResponseEntity<>(tipoCrear, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/create/activo")
	public ResponseEntity<Activo> createActivo(@RequestBody Activo activoc) {

		Activo request = new Activo();
		request.setName(activoc.getName());
		request.setDescripción(activoc.getDescripción());
		request.setTipo(tipoDAO.findById(activoc.getTipo().getId()).get());
		if (activoc.getPersona() != null) {
			request.setPersona(personaDAO.findById(activoc.getPersona().getId()).get());
		} else {
			request.setPersona(activoc.getPersona());
		}
		if (activoc.getArea() != null) {
			request.setArea(areaDAO.findById(activoc.getArea().getId()).get());
		} else {
			request.setArea(null);
		}
		request.setSerial(activoc.getSerial());
		request.setNumero(activoc.getNumero());
		request.setAlto(activoc.getAlto());
		request.setAncho(activoc.getAncho());
		request.setLargo(activoc.getLargo());
		request.setPeso(activoc.getPeso());
		request.setValor(activoc.getValor());
		request.setFecha(activoc.getFecha());

		try {
			Activo activoCrear = activosDAO.save(request);

			return new ResponseEntity<>(activoCrear, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/update/activo")
	public ResponseEntity<Activo> updateActivo(@RequestBody Activo activoc) {

		Activo request = activosDAO.getById(activoc.getId());
		request.setName(activoc.getName());
		request.setDescripción(activoc.getDescripción());
		request.setTipo(tipoDAO.findById(activoc.getTipo().getId()).get());
		if (activoc.getPersona() != null) {
			request.setPersona(personaDAO.findById(activoc.getPersona().getId()).get());
		} else {
			request.setPersona(activoc.getPersona());
		}
		if (activoc.getArea() != null) {
			request.setArea(areaDAO.findById(activoc.getArea().getId()).get());
		} else {
			request.setArea(null);
		}
		request.setSerial(activoc.getSerial());
		request.setNumero(activoc.getNumero());
		request.setAlto(activoc.getAlto());
		request.setAncho(activoc.getAncho());
		request.setLargo(activoc.getLargo());
		request.setPeso(activoc.getPeso());
		request.setValor(activoc.getValor());
		request.setFecha(activoc.getFecha());

		try {
			Activo activoCrear = activosDAO.save(request);

			return new ResponseEntity<>(activoCrear, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/buscar/tipo/{id}")
	public ResponseEntity<Object> getActivoByTipo(@PathVariable Long id) {
		Map<String, Object> map = new HashMap<String, Object>();

		Optional<Tipo> tipoBuscar = tipoDAO.findById(id);

		Activo activoBuscar = activosDAO.findByTipo(tipoBuscar);

		List<Activo> resultado = new ArrayList<Activo>();
		resultado.add(activoBuscar);

		if (activoBuscar == null) {
			map.clear();
			map.put("timestamp", new Date());
			map.put("status", HttpStatus.NO_CONTENT);
			map.put("isSuccess", false);
			map.put("message", "No hay resultados");
			map.put("data", null);
			return ResponseEntity.badRequest().body(map);
		} else {
			map.clear();
			map.put("timestamp", new Date());
			map.put("isSuccess", true);
			map.put("status", HttpStatus.OK);
			map.put("data", resultado);

			return ResponseEntity.ok(map);
		}

	}

	@RequestMapping(value = "tipos", method = RequestMethod.GET)
	public ResponseEntity<List<Tipo>> getTipos() {

		List<Tipo> tipos = tipoDAO.findAll();
		return ResponseEntity.ok(tipos);
	}

	@RequestMapping(value = "areas", method = RequestMethod.GET)
	public ResponseEntity<List<Area>> getAreas() {

		List<Area> areas = areaDAO.findAll();
		return ResponseEntity.ok(areas);
	}

	@RequestMapping(value = "personas", method = RequestMethod.GET)
	public ResponseEntity<List<Persona>> getPersonas() {

		List<Persona> personas = personaDAO.findAll();
		return ResponseEntity.ok(personas);
	}

	// @GetMapping
	@RequestMapping(value = "hello", method = RequestMethod.GET)
	public String hello() {
		return "Hello World";
	}

}
