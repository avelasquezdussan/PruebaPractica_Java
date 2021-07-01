package com.example.pruebatecnica.entitys;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="activos")
public class Activo {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="name", nullable = false, length = 30)
	private String name;
	
	@Column(name="descripción", nullable = false, length = 200)
	private String descripción;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tipo_id")
    private Tipo tipo;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "persona_id")
    private Persona persona;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "area_id")
    private Area area;
	
	
	@Column(name="serial", nullable = false, length = 50)
	private String serial;
	
	@Column(name="numero", nullable = false, length = 50)
	private String numero;
	
	@Column(name="peso", columnDefinition = "integer default 0")
	private Integer peso;
	
	@Column(name="alto", columnDefinition = "integer default 0")
	private Integer alto;
	
	@Column(name="ancho", columnDefinition = "integer default 0")
	private Integer ancho;
	
	@Column(name="largo", columnDefinition = "integer default 0")
	private Integer largo;
	
	@Column(name = "valor", nullable = false, scale = 2)
    private double valor;
	
	
	@Column(name = "fecha", updatable = false, nullable = false)
    private Date fecha;
	
	
public Activo() {
		
	}
	
	public Activo(String name, String descripción, Tipo tipo, Persona persona, Area area, String serial, String numero,
			Integer peso, Integer alto, Integer ancho, Integer largo, double valor, Date fecha) {
		super();
		this.name = name;
		this.descripción = descripción;
		this.tipo = tipo;
		this.persona = persona;
		this.area = area;
		this.serial = serial;
		this.numero = numero;
		this.peso = peso;
		this.alto = alto;
		this.ancho = ancho;
		this.largo = largo;
		this.valor = valor;
		this.fecha = fecha;
	}
	public Persona getPersona() {
		return persona;
	}
	public void setPersona(Persona persona) {
		this.persona = persona;
	}
	public void setPeso(Integer peso) {
		this.peso = peso;
	}
	public void setAlto(Integer alto) {
		this.alto = alto;
	}
	public void setAncho(Integer ancho) {
		this.ancho = ancho;
	}
	public void setLargo(Integer largo) {
		this.largo = largo;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	
	public String getDescripción() {
		return descripción;
	}
	public void setDescripción(String descripción) {
		this.descripción = descripción;
	}
	public Tipo getTipo() {
		return tipo;
	}
	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}
	public String getSerial() {
		return serial;
	}
	public void setSerial(String serial) {
		this.serial = serial;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public int getPeso() {
		return peso;
	}
	public void setPeso(int peso) {
		this.peso = peso;
	}
	public int getAlto() {
		return alto;
	}
	public void setAlto(int alto) {
		this.alto = alto;
	}
	public int getAncho() {
		return ancho;
	}
	public void setAncho(int ancho) {
		this.ancho = ancho;
	}
	public int getLargo() {
		return largo;
	}
	public void setLargo(int largo) {
		this.largo = largo;
	}
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
