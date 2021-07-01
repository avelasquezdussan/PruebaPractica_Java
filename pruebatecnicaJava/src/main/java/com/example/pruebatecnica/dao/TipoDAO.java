package com.example.pruebatecnica.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pruebatecnica.entitys.Tipo;


public interface TipoDAO extends JpaRepository<Tipo,Long> {

}
