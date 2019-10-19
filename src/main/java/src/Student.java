package src;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

import lombok.Data;

@Data
@Entity
public class Student {

	private @Id @GeneratedValue Long id;
	@SuppressWarnings("unused")
	private String[] names;
	@SuppressWarnings("unused")
	private String[] email;
	@SuppressWarnings("unused")
	private String[] phone;
	@SuppressWarnings("unused")
	private String[] other;

	@SuppressWarnings("unused")
	private Student() {}

	public Student(String[] names, String[] email, String[] phone, String[] other) {
		this.names = names;
		this.email = email;
		this.phone = phone;
		this.other = other;
	}
}