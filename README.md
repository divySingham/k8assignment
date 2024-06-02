# k8assignment

<!--

1-> Run below command

	kubectl apply -f a-db-pv.yaml && kubectl apply -f a-db-pvc.yaml && kubectl apply -f a-mysql-secrets.yaml && kubectl apply -f a-mysql-headless-service.yaml && kubectl apply -f a-stateful-set-db.yaml

2-> Initialize db

	kubectl exec -it mysql-set-0 -- bin/sh

	mysql -u root -p

	enter password: yourpassword

  CREATE DATABASE mydatabase;

	USE mydatabase;

	CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(50) NOT NULL,password VARCHAR(255) NOT NULL, email VARCHAR(100) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

	INSERT INTO user (username, password, email) VALUES ('john_doe', 'password123', 'john_doe@example.com'),('jane_smith', 'password456', 'jane_smith@example.com'),('alice_jones', 'password789', 'alice_jones@example.com');

3-> Run below command

	kubectl apply -f b-node-app-config-map.yaml && kubectl apply -f b-node-app-secret.yaml && kubectl apply -f b-lb-service.yaml && kubectl apply -f b-deployment.yaml

4-> Run below command

	kubectl apply -f c-hpa.yaml

5-> Now to increase load exec into a running pod and run fibo function

	kubectl exec -it <pod-name> -- sh

	node

	function fibo(n) { if (n < 2) {return 1;} else {return fibo(n - 2) +fibo(n - 1);}}

	fibo(46)

6-> to check that storage is retained

  kubectl delete po mysql-set-0

 -->
