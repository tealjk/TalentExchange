package src;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final StudentRepository repository;
	private String[] names = {"David", "William", "Nastase"};
	private String[] email = {"davidwnastase@gmail.com"};
	private String[] phone = {"7035547095"};
	private String[] other = {"The best there ever was"};
	
	@Autowired
	public DatabaseLoader(StudentRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Student( names, email, phone, other));
	}

}
