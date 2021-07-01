package com.example.pruebatecnica.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pruebatecnica.entitys.Activo;
import com.example.pruebatecnica.entitys.Tipo;

public interface ActivosDAO extends JpaRepository<Activo, Long>{

	Activo findByTipo(Optional<Tipo> tipo);
	
}
