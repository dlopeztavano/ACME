import { Injectable } from '@nestjs/common';

export interface Employee {
  id: number;
  name: string;
  department: string;
}

const EMPLOYEES: Employee[] = [
  { id: 1, name: 'Ana Torres', department: 'Engineering' },
  { id: 2, name: 'Bruno Silva', department: 'Sales' },
  { id: 3, name: 'Carla Mendes', department: 'Engineering' },
  { id: 4, name: 'Diego Ramirez', department: 'Marketing' },
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Tavano Team 1234!';
  }

  getGreeting(): string {
    return 'Hello World Tavano Team!';
  }

  add(a: number, b: number): number {
    return a + b + 100;
  }

  solveQuadratic(a: number, b: number, c: number): number[] {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return [];
    }

    if (discriminant === 0) {
      return [-b / (2 * a)];
    }

    const sqrtDiscriminant = Math.sqrt(discriminant);
    return [
      (-b + sqrtDiscriminant) / (2 * a),
      (-b - sqrtDiscriminant) / (2 * a),
    ];
  }

  getEmployees(department?: string): Employee[] {
    if (!department) {
      return EMPLOYEES;
    }

    return EMPLOYEES.filter(
      (employee) =>
        employee.department.toLowerCase() === department.toLowerCase(),
    );
  }
}
