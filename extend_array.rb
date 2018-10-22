class Array
  def square
    # create your square method here
    square = []
    for x in self
      y = x * x
      square.push(y)
    end
    return square
  end

  def cube
    cube = []
    for x in self
      y = x ** 3
      cube.push(y)
    end
    return cube
  end

  def sum
    self.inject(0){|sum,x| sum + x }
  end

  def average
    self.inject { |sum, el| sum + el }.to_f / self.size
  end

  def even
    self.select(&:even?)
  end

  def odd
    self.select(&:odd?)
  end    
  
end

array = Array.new([1, 2, 4])

print array.square