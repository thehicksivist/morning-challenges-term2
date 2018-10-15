# For this challenge, your Todo List should be able to perform all actions
# given in the test. Namely you should be able to:
# 1. create a new todo list with a title and description
# 2. update the title or description
# 3. get a count of items in the list
# 4. check to see if all items in the list are marked done
# 5. mark all items in the list as done
# 6. add items to the list
# 7. mark a single item in the list as done
# 8. delete items from the list

# To accomplish this, you should define two classes - a TodoList class
# and a TodoListItem class.
class TodoList
    attr_accessor :title, :description
    # title and description
    def initialize(title)
        @title = title
        @list = {}
    end
    # update title and description
    def update_title(title)
        @title = title
    end
    # add and delete items from list
    def add_item(item)
        @list[item] = TodoListItem.new
    end

    def delete_item(item)
        @list.delete(item)
    end
    
    # get a count of items in the list
    def count
        return @list.length
    end

    def title
        return @title
    end

    def update_done(item)
        # item.done? = true
        @list[item].done = true
    end

    def get_item(item)
        @list[item]
    end

    def all_done?
        @list.values.none?
    end

end

class TodoListItem
    attr_accessor :done

    def initialize()
        @done = false
    end

    def done?
        @done
    end
end